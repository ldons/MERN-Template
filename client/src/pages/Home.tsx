import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Pencil, Trash2 } from "lucide-react";

interface Item {
  _id: string;
  title: string;
  description: string;
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/items`);
      if (!response.ok) throw new Error("Failed to fetch items");
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error);
      toast({
        title: "Error",
        description: "Failed to load items",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      toast({
        title: "Validation Error",
        description: "Title and description are required",
        variant: "destructive",
      });
      return;
    }

    try {
      const method = editingId ? "PUT" : "POST";
      const url = editingId 
        ? `${API_BASE_URL}/items/${editingId}`
        : `${API_BASE_URL}/items`;

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) throw new Error(`Failed to ${editingId ? 'update' : 'create'} item`);

      const data = await response.json();

      if (editingId) {
        setItems(items.map(item => item._id === editingId ? data : item));
        setEditingId(null);
      } else {
        setItems([...items, data]);
      }

      setTitle("");
      setDescription("");

      toast({
        title: "Success",
        description: `Item ${editingId ? 'updated' : 'created'} successfully`,
      });
    } catch (error) {
      console.error(`Error ${editingId ? 'updating' : 'creating'} item:`, error);
      toast({
        title: "Error",
        description: `Failed to ${editingId ? 'update' : 'create'} item`,
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/items/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete item");

      setItems(items.filter(item => item._id !== id));
      
      toast({
        title: "Success",
        description: "Item deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting item:", error);
      toast({
        title: "Error",
        description: "Failed to delete item",
        variant: "destructive",
      });
    }
  };

  const handleEdit = (item: Item) => {
    setEditingId(item._id);
    setTitle(item.title);
    setDescription(item.description);
  };

  const handleCancel = () => {
    setEditingId(null);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="mx-auto p-4 grid grid-cols-3 gap-4">
      <div>
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>{editingId ? 'Edit Item' : 'Create New Item'}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter item title"
                />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter item description"
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit" variant="outline" className="flex-1">
                  {editingId ? 'Update Item' : 'Add Item'}
                </Button>
                {editingId && (
                  <Button type="button" variant="destructive" onClick={handleCancel}>
                    Cancel
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-2">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Items List</CardTitle>
          </CardHeader>
          <CardContent>
            {items.length === 0 ? (
              <p className="text-center text-gray-500">No items found</p>
            ) : (
              <div className="grid gap-4">
                {items.map((item) => (
                  <div
                    key={item._id}
                    className="p-4 border rounded hover:bg-gray-50 transition-colors flex justify-between items-start"
                  >
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(item)}
                        className="h-8 w-8"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(item._id)}
                        className="h-8 w-8 text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}



