//Global debug constant
const DEBUG = false

const root = 2

// Sample input
const nodes = [[1,2],[2,3],[3,4],[1,5]]
const nodes2 = [[4,5],[5,3],[1,5],[2,5]]

const createTree = (root, nodes) => {

    // Tree object that we will be returning; initialize it with root
    let tree = { 
        id:  root
    };

    if (DEBUG) {
        console.log('length = ' + nodes.length)
        console.log('root = ' + root)
    }
    // Children of treenode initialized empty
    let children = [];

    // For loop to create the children for each node in the tree
    for (let i = 0; i < nodes.length; i++){
        // Check to see if the root (1) is found at nodes[i]; this will return -1 if not found
        const rootIndex = nodes[i].indexOf(root)

        if (DEBUG) {
            // console.log('root index = ' + rootIndex)
            console.log('index = ' + i)
        }
        
        // A node in a tree can not have more than 2 children so check if it has two children
        // Also check if rootIndex = -1 which means it does not exist based on return value of indexOf()
        if (rootIndex !== -1){
            // Push the edge onto the children array of the TreeNode based on whether the root is at index 0 or 1
            if (rootIndex == 0) {
                children.push(nodes[i][(1)])
            } else {
                children.push(nodes[i][0])
            }
            
            // Need to remove the ith node otherwise we run into an infinite loop d
            nodes.splice(i--, 1)

            if (DEBUG) {
                console.log(children)
                console.log(nodes)
            }
            
        }
    }    

    return recurseSubtree(children, tree)
}    


const recurseSubtree = (children, tree) => {
    if (children.length !== 0){ 
        // Add children property to tree object initialized to empty
        tree.children = [];  
        // Loop through children
        for (let child of children){ 
            // Use recursion to recursively create the subtree for each node and push it onto the children of each node
            // It is very common to use recursion to solve tree problems when using BFS
            tree.children.push(createTree(child, nodes2))
        }
       tree.children.forEach((child) => console.log(child))
    }
    return tree;
}

// console.log('Sample Test Case 1:')
// console.log(createTree(root, nodes))
console.log('\n')
console.log('Sample Test Case 2:')
console.log(createTree(root, nodes2))