import { ClerkProvider, UserButton } from '@clerk/nextjs'

const Home = () => {
  return (
    <div>
        <ClerkProvider afterSignOutUrl="/">
            <UserButton />
        </ClerkProvider>
    </div>
  )
}

export default Home