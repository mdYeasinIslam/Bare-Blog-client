import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { FaTrash } from 'react-icons/fa';

// Define the data structure
type Blog = {
    author: string;
    title: string;
    category: string;
    publishDate: string;
    delete: string;
};

const AllBlogs= () => {
    // Sample dynamic data (replace this with your array of objects)
    const data: Blog[] = [
        {
            author: 'John Doe',
            title: 'Introduction to React',
            category: 'Programming',
            publishDate: '2023-12-01',
            delete: '',
        },
        {
            author: 'Jane Smith',
            title: 'Tailwind Tips & Tricks',
            category: 'Web Design',
            publishDate: '2023-11-20',
            delete: '',
        },
        {
            author: 'Alice Brown',
            title: 'Understanding TypeScript',
            category: 'Development',
            publishDate: '2023-10-15',
            delete: '',
        },
    ];

    // Define the table columns
    const columns: ColumnDef<Blog>[] = [
        {
            accessorKey: 'author',
            header: 'Author',
        },
        {
            accessorKey: 'title',
            header: 'Title',
        },
        {
            accessorKey: 'category',
            header: 'Category',
        },
        {
            accessorKey: 'publishDate',
            header: 'Publish Date',
        },
        {
            id: 'delete',
            header: 'Delete',
            cell: ({ row }) => (
                <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(row.original)}
                >
                    <FaTrash />
                </button>
            ),
        },
    ];

    // Handle delete functionality
    const handleDelete = (rowData: Blog) => {
        console.log('Deleting:', rowData);
        // Add your delete logic here (e.g., update state or make API call)
    };

    // Set up the table
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="p-4">
            <table className="min-w-full table-auto border-collapse border border-gray-200 shadow-md">
                <thead className="bg-gray-100">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="border border-gray-300 px-4 py-2 text-left"
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
                            className="odd:bg-white even:bg-gray-50 hover:bg-gray-100"
                        >
                            {row.getVisibleCells().map((cell) => (
                                <td
                                    key={cell.id}
                                    className="border border-gray-300 px-4 py-2 text-sm"
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

export default AllBlogs;
