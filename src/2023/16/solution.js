function transformTree(tree) {
    const addNode = (tree, index) =>
        tree[index] === undefined || tree[index] === null ? null : ({
            value: tree[index],
            left: addNode(tree, index * 2 + 1),
            right: addNode(tree, index * 2 + 2),
        });

    const objectTree = addNode(tree, 0);

    return objectTree;
}