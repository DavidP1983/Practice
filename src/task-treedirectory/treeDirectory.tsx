const tree = [
  {
    id: 1,
    name: 'src',
    children: [
      {
        id: 2,
        name: 'components',
        children: [
          {
            id: 3,
            name: 'Button.tsx',
            children: [],
          },
        ],
      },
      {
        id: 4,
        name: 'index.ts',
        children: [],
      },
    ],
  },
  {
    id: 5,
    name: 'Readme.md',
    children: [],
  },
];

/* Вариант - 1 */

// interface Props {
//     items: any[],
//     render: (value: string, arr: any[]) => ReactNode
// }

// const Directory = ({ items, render }: Props) => {

//     function fn(items: any[]) {
//         const elem = items.map((node, _, arr) => (
//             <li key={node.id} style={{ marginLeft: "20px" }}>
//                 {node.children.length > 0 ? node.name : null}
//                 {node.children.length ? <ul>{fn(node.children)}</ul> : render(node.name, arr)}
//             </li>
//         ));
//         return elem
//     }

//     const elem = fn(items)

//     return (
//         <ul style={{ textAlign: "start" }}>
//             {elem}
//         </ul>
//     )
// }

// export const TreeDirectory = () => {

//     return (
//         <div>
//             <Directory
//                 items={tree}
//                 render={(item, arr) => <span style={{ color: arr.length === 1 ? "red" : '' }}>{item}</span>} />

//         </div>
//     )
// }

/* Вариант - 2 */

export const TreeDirectory = () => {
  const directory = (node) => {
    return (
      <li key={node.id}>
        {node.name}
        <ul>{node.children.map((elem) => directory(elem))}</ul>
      </li>
    );
  };

  return <ul>{tree.map((node) => directory(node))}</ul>;
};
