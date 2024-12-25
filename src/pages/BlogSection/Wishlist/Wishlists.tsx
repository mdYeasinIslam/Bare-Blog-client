import { WishType } from "../../../Types/types";
import { useEffect, useState } from "react";
import axios from "axios";
import useContextHook from "../../../Hooks/useContextHook";

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { FaTrash } from 'react-icons/fa';
import { CiEdit } from "react-icons/ci";
import toast from "react-hot-toast";

const Wishlists = () => {
    const [wishlistData, setWishlistData] = useState<WishType[]>([])
    const { user,darkMode } = useContextHook()
    useEffect(() => {
        const email = user.email as string
        fetchData(email)
    }, [user?.email])
    const fetchData = async (email: string) => {
        const response = await axios.get(`${import.meta.env.VITE_server}/wishlist?email=${email}`)
        setWishlistData(response.data)
    }
    // Define the table columns
    const columns: ColumnDef<WishType>[] = [
        {
            accessorKey: 'author',
            header: 'Img/Author',
            cell: ({ row }) => (
                <div className="md:flex items-center gap-2">
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
            accessorKey: 'title',
            header: 'Title',
        },
        {
            accessorKey: 'category',
            header: 'Category',
            cell: ({ row }) => {
                const categories = row.original.categories;
                return (
                    <span>
                        {Array.isArray(categories)
                            ? categories.join(', ') // Join array elements into a comma-separated string
                            : categories // If it's already a string, display it as is
                        }
                    </span>
                );
            }
        },
        {
            accessorKey: 'publishDate',
            header: 'Publish Date',
        },
        {
            id: 'delete',
            header: 'Delete',
            cell: ({ row }) => (
                <div className="flex gap-2">
                    <button
                        className=" hover:text-red-700"
                    >
                    <CiEdit className="w-6 h-5"/>
                    </button>
                    <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleDelete(row.original)}
                    >
                        <FaTrash className="w-6 h-5"/>

                    </button>

                </div>

            ),
        },
    ];

    // Handle delete functionality
    const handleDelete = (rowData: WishType) => {
        axios.delete(`${import.meta.env.VITE_server}/wishlist/${rowData._id}`)
            .then(response => {
                console.log(response)
                if (response.data.acknowledged === true) {
                    fetchData(user.email as string)
                    toast.success('Blog deleted form wishlist successfully')
                }
            }).catch(e => {
                console.log(e)
                toast.error(e.message)
            })
    };

    // Set up the table
    const table = useReactTable({
        data: wishlistData,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className={`md:p-4 ${darkMode?'dark':''}`}>
            <table className="md:min-w-full table-auto border-collapse border border-gray-200 shadow-md dark:bg-[#111827]">
                <thead className="bg-gray-100 dark:bg-[#2e3e61] dark:text-white">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className=" md:px-4 py-2 md:text-left"
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
                            className="odd:bg-white even:bg-gray-50 hover:bg-gray-100  dark:bg-[#2e3e61] dark:text-white border"
                        >
                            {row.getVisibleCells().map((cell) => (
                                <td
                                    key={cell.id}
                                    className=" md:px-4 py-4 text-sm "
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Wishlists;