# Pristina

Nextjs project integrated to Azure Application Insights to capture and send usage metrics for monitoring and analytics.

## Getting Started

Put `Application Insights Instrumentation Key` to [applicationInsights.ts](https://github.com/polatengin/pristina/blob/11b2490b42c9dc04b43f6dba32ca0c19c07800cc/lib/applicationInsights.ts#L15) file.

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser and click _Button 1_ and _Button 2_.

Go to [Azure Portal](https://portal.azure.com), find the `Application Insights` resource, click `Monitoring`\\`Logs` menu item from the left menu.

Click _New Query_, and copy-paste the following _query_;

```text
customEvents
| project name, duration = tolong(customMeasurements.duration)
| summarize avg_duration = avg(duration) by name
| order by avg_duration asc
```

Click _Run_ button and observe the _Results_ section;

![Results section](https://github.com/user-attachments/assets/1c714248-7478-4325-8ef9-28a173fb1281)
