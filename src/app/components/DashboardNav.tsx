// "use client"
// import Link from "next/link";
// import { usePathname } from "next/navigation";
    
// export default function DashboardNav() {
//     const pathname=usePathname();
//     const isEventTypesPage=pathname.includes('event-types')
    
//   return (
//     <div className="flex gap-4 justify-center">
//     <Link className={"rounded-full px-4 py-2" + (isEventTypesPage ? "bg-gray-200":"")}
//      href={'/dashboard'}>
//     Booked events
//     </Link>
//     <Link  
//     className={"rounded-full px-4 py-2" + (isEventTypesPage ? "bg-gray-200":"")}
//     href={'/dashboard/event-types'}>
//     Event types
//     </Link>
// </div>
//   )
// }






















"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
export default function DashboardNav() {
    const pathname = usePathname();
    
    // Ensure pathname is defined before checking its value
    const isEventTypesPage = pathname ? pathname.includes('event-types') : false;

    return (
        <div className="flex gap-4 justify-center">
            <Link 
            className={clsx('rounded-full px-4 py-2',pathname && !isEventTypesPage ? "bg-blue-600 text-white" : "bg-gray-200")}
                // className={"rounded-full px-4 py-2" + (pathname && !isEventTypesPage ? "bg-blue-600 text-white" : "bg-gray-200")}
                href={'/dashboard'}>
                Booked events
            </Link>
            <Link  
                className={clsx('rounded-full px-4 py-2',isEventTypesPage ? "bg-blue-600 text-white" : "bg-gray-200")}
                // className={"rounded-full px-4 py-2 " + (isEventTypesPage ? "bg-blue-600 text-white" : "bg-gray-200")}
                href={'/dashboard/event-types'}>
                Event types
            </Link>
        </div>
    )
}
