import { useState } from "react";
import { SideBarComponent } from "./SideBarComponent";
import { CustomerTableComponent } from "./CustomerTableComponent";
import { Sheet } from "./ui/sheet";

export function MainComponent() {
  const [value, setValue] = useState<unknown>();

  return (
    <Sheet>
      <section className=" mt-8 bg-gray-900 h-screen flex-block rounded-lg">
        <div className="mb-8 mt-8 lg:mb-10">
          <h2 className="m-4 pt-4 text-xl text-white">Моя организация</h2>
          <div className="border-[0.1px]" />
        </div>
        <div>
          <h2 className="mx-4 text-xl text-white">Пользователи</h2>
          <CustomerTableComponent getValue={(value) => setValue(value)} />
        </div>

        <SideBarComponent value={value} />
      </section>
    </Sheet>
  );
}
