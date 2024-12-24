// import {
//     createColumnHelper,
//     flexRender,
//     getCoreRowModel,
//     useReactTable,
// } from '@tanstack/react-table'

// type Person = {
//     firstName: string
//     lastName: string
//     age: number
//     visits: number
//     status: string
//     progress: number
// }
// const defaultData: Person[] = [
//     {
//         firstName: 'tanner',
//         lastName: 'linsley',
//         age: 24,
//         visits: 100,
//         status: 'In Relationship',
//         progress: 50,
//     },
//     {
//         firstName: 'tandy',
//         lastName: 'miller',
//         age: 40,
//         visits: 40,
//         status: 'Single',
//         progress: 80,
//     },
//     {
//         firstName: 'joe',
//         lastName: 'dirte',
//         age: 45,
//         visits: 20,
//         status: 'Complicated',
//         progress: 10,
//     },
// ]
// const columnHelper = createColumnHelper<WishType>()
// const columns = [
//     columnHelper.accessor('author', {
//         header: () => 'Author',
//         cell: info => info.getValue(),
//     }),
//     columnHelper.accessor('categories', {
//         header: 'Categories',
//     }),
//     columnHelper.accessor('title', {
//         header: () => 'Title',
//     }),
//     columnHelper.accessor('publishDate', {
//         header: () => <span>Publish_Date</span>,
//     }),

// ]
const Tanstack = () => {
    // const [data, _setData] = useState(wishlistData)

    // const table = useReactTable({
    //     data,
    //     columns,
    //     getCoreRowModel: getCoreRowModel(),
    // })
    return (
        <div>
            {/* <table className='w-full'>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
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
                <tbody className=''>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id} className=''>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} className=''>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>

            </table> */}

        </div>
    );
};

export default Tanstack;