import { ReactNode } from "react";

export default function Columns({number, children}: {number: number, children: ReactNode}) {
    const columns = [] as [];
    for(let i = 0; i < number; i++) {
        columns.push(<div>{children}</div>)
    }
    return <div>{columns}</div>
}
