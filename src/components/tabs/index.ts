import { TabsButton } from "./tab-button";
import { Tabs } from "./tabs";
import { TabComponent } from "./types/tabs-component";

export { TabsButton } from "./tab-button";

(Tabs as TabComponent).Button = TabsButton;

const TabsComponent = Tabs as TabComponent;

export { TabsComponent as Tabs };
