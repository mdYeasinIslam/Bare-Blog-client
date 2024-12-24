import { WishType } from "../../../Types/types";
import { useEffect, useState } from "react";
import axios from "axios";
import useContextHook from "../../../Hooks/useContextHook";
import './style.css'
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';

const FeaturedBlogs = () => {
    const [wishlistData, setWishlistData] = useState<WishType[]>([])
    const {user, darkMode } = useContextHook()
   const [error,setError] = useState('')
    useEffect(() => {
        fetchData(user.email as string)
    }, [user.email])
    const fetchData = (email: string) => {
        console.log(email)
        axios.get(`${import.meta.env.VITE_server}/featuredBlog?email=${email}`, { withCredentials: true })
            .then(response => {
                setWishlistData(response.data)
                
            }).catch(e => {
                console.log(e.response)
                setError(e.response.data.message)
            })
      
    }
    // Define the table columns
    const columns: ColumnDef<WishType>[] = [
        {
            accessorKey: 'author',
            header: 'Img/Author',
            cell: ({ row }) => (
                <div className="flex items-center gap-2 md:w-full">
                    <img
                        src={row.original.imageUrl}
                        alt={row.original.author}
                        className="w-8 h-8 rounded-full"
                    />
                    <span className="font-medium">{row.original.author}</span>
                </div>
            ),
        },
        {
            accessorKey: 'publishDate',
            header: 'Publish-date',
        },
        {
            accessorKey: 'title',
            header: 'Title',
        },
        {
            accessorKey: 'category',
            header: 'Category',
            cell: ({ row }) => {
                const categories = row.original.categories;
                return (
                    <span className="md:w-full">
                        {Array.isArray(categories)
                            ? categories.join(', ') 
                            : categories 
                        }
                    </span>
                );
            }
        },
        {
            accessorKey: 'excerpt',
            header: 'Details',
            size:200,
            
        },
    ];
    // Set up the table
    const table = useReactTable({
        data: wishlistData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className={`lg:p-4 ${darkMode ? 'dark' : ''} overflow-x-scroll`}>
            {
                error?.length ?
                    <p className="text-center font-medium text-xl">{error}
                    </p>
                    :
                         <table
                style={{ tableLayout: "fixed", width: "100%", borderCollapse: "collapse" }}
                className="md:min-w-full table-auto border-collapse border border-gray-200 shadow-md dark:bg-[#111827] overflow-x-scroll">
                <thead className="bg-gray-100 dark:bg-[#2e3e61] dark:text-white">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    style={{ width: header.getSize() }}
                                    className=" lg:px-4 py-2 text-center md:text-left"
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr
                            key={row.id}
                            className="odd:bg-white even:bg-gray-50 hover:bg-gray-100  dark:bg-[#2e3e61] dark:text-white border "
                        >
                            {row.getVisibleCells().map((cell) => (
                                <td
                                    key={cell.id}
                                    className=" lg:px-4 md:py-4 text-sm text-center "
                                    style={{
                                        border: "1px solid #ddd",
                                        // padding: "8px",
                                        whiteSpace: "normal", 
                                        wordWrap: "break-word",
                                    }}
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
                }
       
        </div>
    );
};

export default FeaturedBlogs;