import Sidebar from "./_components/sidebar"

const DashboardLayout = ({children}: {
    children: React.ReactNode
}) => {
  return (
    <div className="h-full">
        <div className="hidden md:flex h-full w-56 flex-colo fixed flex-col inset-y-0 z-50">
          <Sidebar />
        </div>
        {children}
    </div>
  )
}

export default DashboardLayout