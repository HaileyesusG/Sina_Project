import StudentList from '@/components/student/StudentList';
import RootLayout from '@/layouts/RootLayout';
import TopHeader from '@/components/common/Header';
import React from 'react';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import PendlingStudentList from '@/components/student/PendlingStudentList';

function Student() {
  const [activeTab, setActiveTab] = React.useState("current");
  const data = [
    {
      label: "Current Students",
      value: "current",
      desc: <StudentList/>,
    },
    {
      label: "Pending Students",
      value: "pending",
      desc: <PendlingStudentList/>,
    },
  ]
  return (
    <RootLayout>
      <TopHeader title={"Student"}/>
      <Tabs value={activeTab} className="h-screen">
        <TabsHeader
          className="rounded-none bg-transparent py-2 px-20"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-gray-900 font-bold" : ""}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </RootLayout>
  )
}

export default Student;
