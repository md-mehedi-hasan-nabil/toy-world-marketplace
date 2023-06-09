import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CategoryToy from "./CategoryToy";

export default function Toys() {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Teddy bear</Tab>
          <Tab>Horse</Tab>
          <Tab>Dinosaur</Tab>
        </TabList>

        <TabPanel>
          <CategoryToy category="teddy bear" />
        </TabPanel>
        <TabPanel>
          <CategoryToy category="horse" />
        </TabPanel>
        <TabPanel>
          <CategoryToy category="dinosaur" />
        </TabPanel>
      </Tabs>
    </>
  );
}
