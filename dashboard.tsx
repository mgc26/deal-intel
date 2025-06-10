import { AppSidebar } from "@/components/app-sidebar"
import { DashboardHeader } from "@/components/dashboard-header"
import { StatsCards } from "@/components/stats-cards"
import { RecentSales } from "@/components/recent-sales"
import { OverviewChart } from "@/components/overview-chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <DashboardHeader />
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
            <div className="p-6">
              <div className="flex items-center justify-between space-y-2 mb-6">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
              </div>
              <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                  <StatsCards />
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <Card className="col-span-4">
                      <CardHeader>
                        <CardTitle>Overview</CardTitle>
                      </CardHeader>
                      <CardContent className="pl-2">
                        <OverviewChart />
                      </CardContent>
                    </Card>
                    <Card className="col-span-3">
                      <CardHeader>
                        <CardTitle>Recent Sales</CardTitle>
                        <CardDescription>You made 265 sales this month.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <RecentSales />
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="analytics" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Page Views</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">10,482</div>
                        <p className="text-xs text-muted-foreground">+12% from last month</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">24.5%</div>
                        <p className="text-xs text-muted-foreground">-2% from last month</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Session Duration</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">3m 24s</div>
                        <p className="text-xs text-muted-foreground">+8% from last month</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">3.2%</div>
                        <p className="text-xs text-muted-foreground">+0.5% from last month</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="reports" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Reports</CardTitle>
                      <CardDescription>Generate and download reports for your business.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Reports functionality coming soon...</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="notifications" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notifications</CardTitle>
                      <CardDescription>Manage your notification preferences.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">Notification settings coming soon...</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
