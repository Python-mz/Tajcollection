import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Mock data for user and orders
const user = {
  name: "Aisha Sharma",
  email: "aisha.sharma@example.com",
  joined: "2023-05-15",
};

const orders = [
  {
    id: "ord_1a2b3c",
    date: "2024-07-20",
    total: 195.0,
    status: "Shipped",
    items: "Royal Silk Scarf, Linen Trousers",
  },
  {
    id: "ord_4d5e6f",
    date: "2024-06-12",
    total: 250.0,
    status: "Delivered",
    items: "Golden Zari Shawl",
  },
  {
    id: "ord_7g8h9i",
    date: "2024-05-01",
    total: 120.0,
    status: "Delivered",
    items: "Embroidered Cotton Kurta",
  },
];

export default function AccountPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 font-headline text-4xl font-bold">My Account</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>Joined on {new Date(user.joined).toLocaleDateString()}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
              <CardDescription>
                A summary of your past purchases.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-mono text-primary">{order.id}</TableCell>
                      <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                      <TableCell>${order.total.toFixed(2)}</TableCell>
                      <TableCell>
                        <Badge variant={order.status === 'Shipped' ? 'default' : 'secondary'}>
                          {order.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
