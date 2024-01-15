import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ChartComponent } from "./ChartComponent";
import { HistoryTableComponent } from "./HistoryTableComponent";

export function SideBarComponent({ value }: { value: any }) {
  return (
    <SheetContent className="bg-[#121825] text-white overflow-scroll">
      <SheetHeader>
        <SheetTitle className="text-white text-xl mb-4">{value}</SheetTitle>
        <SheetDescription className="text-white text-xl pb-8">
          Использование токенов
        </SheetDescription>
      </SheetHeader>
      <div>
        <ChartComponent />
      </div>
      <div className="mb-8 mt-8 lg:mb-10">
        <div className="border-[0.1px]" />
        <SheetTitle className="text-white text-xl mb-8 mt-8">
          История операций
        </SheetTitle>
        <HistoryTableComponent />
      </div>
    </SheetContent>
  );
}
