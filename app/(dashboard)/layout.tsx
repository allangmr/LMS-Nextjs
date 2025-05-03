const DashboardLayout = ({children}: {
    children: React.ReactNode
}) => {
  return (
    <div className="h-full bg-amber-50">
        {children}
    </div>
  )
}

export default DashboardLayout