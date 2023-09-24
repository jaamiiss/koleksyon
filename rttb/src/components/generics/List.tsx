interface ListItem {
    id: number
    first: string
    last: string
}

type ListProps<T extends ListItem> = {
    items: T[]
    onClick: (value: T) => void
}

export const List = <T extends ListItem>({
    items, 
    onClick
    }: ListProps<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => {
                return (
                    <div key={item.id} onClick={() => onClick(item)}>
                        {item.id}. {item.last} {item.first}
                    </div>
                )
            })}
        </div>
    )
}