import { Card, CardContent, Input } from "@mui/material"
import useContextHook from "../../Hooks/useContextHook"

export const Profile = () => {
    const {user} =useContextHook()
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <div
        className="bg-cover bg-center h-48 flex items-center justify-center"
        style={{
          backgroundImage: 'url(/images/profile.jpeg)',
        }}
      >
        <h1 className="uppercase text-4xl font-bold text-white">Profile Page</h1>
      </div>
      {/* Profile Card Section */}
      <div className="flex justify-center mt-8">
        <Card className="w-full max-w-md shadow-lg">
          <CardContent>
            <h2 className="text-2xl font-semibold text-center mb-6">User Information</h2>

            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-600 mb-2">Full Name</label>
              <Input
                id="fullName"
                type="text"
                defaultValue={user?.displayName}
                readOnly
                className="w-full"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
              <Input
                id="email"
                type="email"
                defaultValue={user?.email}
                readOnly
                className="w-full bg-gray-100 cursor-not-allowed"
              />
            </div>
          
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
