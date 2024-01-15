import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { ArrowUpDown, Edit2, Trash } from "lucide-react";

export type CustomerType = {
  id: string;
  name: string;
  role: "user" | "admin";
  subscription: string;
  token: number;
  email: string;
};

export const columnData: CustomerType[] = [
  {
    id: "m5gr84i9",
    name: "Eduard",
    role: "user",
    subscription: "Free",
    token: 12234,
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    name: "Emin",
    role: "user",
    subscription: "Free",
    token: 32343416,
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    name: "Jony",
    role: "user",
    subscription: "Free",
    token: 3123123,
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    name: "Miyagi",
    role: "admin",
    subscription: "Free",
    token: 3112316,
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    name: "Toni",
    role: "user",
    subscription: "Free",
    token: 12000,
    email: "carmella@hotmail.com",
  },
];

export const columns: ColumnDef<CustomerType>[] = [
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "name",
    header: "Имя",
  },
  {
    accessorKey: "role",
    header: "Роль",
  },

  {
    accessorKey: "subscription",
    header: "Подписка",
  },
  {
    accessorKey: "token",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Токены
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("token")}</div>,
  },
  {
    id: "actions",
    accessorKey: "actions",
    header: "Действия",
    enableHiding: false,
    cell: () => (
      <div className="flex justify-evenly mr-12 cursor-pointer">
        <Trash size={14} color="#1C64F2" />
        <Edit2 size={14} color="#1C64F2" />
      </div>
    ),
  },
];
