import React from 'react';

type Props<ListItem> = {
  isOrdered?: boolean;
  className?: string;
  items: ListItem[];
  children: (item: ListItem, index: number) => React.ReactElement;
};

function List<ListItem = {}>({
  isOrdered,
  items,
  children,
  ...props
}: Props<ListItem>) {
  const T = isOrdered ? 'ol' : 'ul';

  return <T {...props}>{items.map(children)}</T>;
}

List.defaultProps = {
  isOrdered: false,
};

export default List;
