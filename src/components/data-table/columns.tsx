import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { ArrowUpDown, Edit2, Trash } from "lucide-react";
import { CustomerType, HistoryType } from "./table-type";

export const customerColumns: ColumnDef<CustomerType>[] = [
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
      <div className="flex cursor-pointer">
        <Trash size={14} color="#1C64F2" className="mr-4" />
        <Edit2 size={14} color="#1C64F2" />
      </div>
    ),
  },
];

export const historyColumns: ColumnDef<HistoryType>[] = [
  {
    accessorKey: "type",
    header: "Тип",
  },
  {
    accessorKey: "total",
    header: "Сумма",
  },
  {
    accessorKey: "date",
    header: "Дата",
  },
];
