import { Card, LineChart } from "@tremor/react";

const chartData = [
  {
    date: "Jan 23",
    Token: 170,
  },
  {
    date: "Feb 23",
    Token: 450,
  },
  {
    date: "Mar 23",
    Token: 1060,
  },
  {
    date: "Apr 23",
    Token: 450,
  },
  {
    date: "May 23",
    Token: 1430,
  },
  {
    date: "Jun 23",
    Token: 1040,
  },
  {
    date: "Jul 23",
    Token: 164,
  },
  {
    date: "Aug 23",
    Token: 130,
  },
  {
    date: "Sep 23",
    Token: 1320,
  },
  {
    date: "Jan 23",
    Token: 170,
  },
  {
    date: "Feb 23",
    Token: 450,
  },
  {
    date: "Mar 23",
    Token: 1060,
  },
  {
    date: "Apr 23",
    Token: 650,
  },
  {
    date: "May 23",
    Token: 1530,
  },
  {
    date: "Jun 23",
    Token: 240,
  },
  {
    date: "Jul 23",
    Token: 164,
  },
  {
    date: "Aug 23",
    Token: 130,
  },
  {
    date: "Sep 23",
    Token: 1320,
  },
  {
    date: "Jan 23",
    Token: 170,
  },
  {
    date: "Feb 23",
    Token: 450,
  },
  {
    date: "Mar 23",
    Token: 1060,
  },
  {
    date: "Apr 23",
    Token: 650,
  },
  {
    date: "May 23",
    Token: 1530,
  },
  {
    date: "Jun 23",
    Token: 340,
  },
  {
    date: "Jul 23",
    Token: 164,
  },
  {
    date: "Aug 23",
    Token: 110,
  },
  {
    date: "Sep 23",
    Token: 1120,
  },
];

const customTooltip = ({
  payload,
  active,
}: {
  payload: any[];
  active: boolean;
}) => {
  if (!active || !payload) return null;
  return (
    <div className="w-56 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border">
      {payload.map((category, idx) => (
        <div key={idx} className="flex flex-1 space-x-2.5">
          <div
            className={`w-1 flex flex-col bg-${category.color}-500 rounded`}
          />
          <div className="space-y-1">
            <p className="text-tremor-content">{category.dataKey}</p>
            <p className="font-medium text-tremor-content-emphasis">
              {category.value} tkn
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export const ChartComponent = () => {
  return (
    <Card className="bg-[dark] border-none">
      <LineChart
        className="h-48 mt-4"
        data={chartData}
        index="date"
        categories={["Token"]}
        colors={["blue"]}
        yAxisWidth={30}
        customTooltip={customTooltip as any}
        showYAxis
      />
    </Card>
  );
};
