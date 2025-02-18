import { Toaster } from "sonner";

import { PlateEditor } from "@/components/editor/plate-editor";
import { SettingsProvider } from "@/components/editor/settings";
import ClientComponent from "./client-component";

export default function Page() {
  return (
    <>
      <ClientComponent />
      <div className="h-screen w-full" data-registry="plate">
        <SettingsProvider>
          <PlateEditor />
        </SettingsProvider>

        <Toaster />
      </div>
    </>
  );
}
