const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class TreeNode {

  constructor(data) {
    this.data = data;
    this.left = undefined;
    this.right = undefined;
  }

  add(data) {
    if (data < this.data) {
      this.addLeft(data);
    } else {
      this.addRight(data);
    }
  }

  addLeft(data) {
    if (this.left) {
      return this.left.add(data)
    }
    this.left = new TreeNode(data);
  }

  addRight(data) {
    if (this.right) {
      return this.right.add(data)
    }
    this.right = new TreeNode(data);
  }

  has(data) {
    if (data === this.data) {
      return true;
    } else if (data < this.data) {
      if (this.left != undefined) {
        return this.left.has(data);
      } else {
        return false;
      }
    } else {
      if (this.right != undefined) {
        return this.right.has(data);
      } else {
        return false;
      }
    }
  }

  find(data) {
    if (data === this.data) {
      return this;
    } else if (data < this.data) {
      if (this.left != undefined) {
        return this.left.find(data);
      } else {
        return undefined;
      }
    } else {
      if (this.right != undefined) {
        return this.right.find(data);
      } else {
        return undefined;
      }
    }
  }

  remove(data) {
    if (data === this.data) {
      if (this.left == undefined && this.right == undefined) {
        return undefined;
      }
      if (this.left == undefined) {
        return this.right;
      }
      if (this.right == undefined) {
        return this.left;
      }
      let minRight = this.right.min();
      this.data = minRight.data;
      this.right = this.right.remove(minRight.data);
    } else if (data < this.data) {
      this.left = this.left && this.left.remove(data);
    } else {
      this.right = this.right && this.right.remove(data);
    }
    return this;
  }

  min() {
    if (this.left == undefined) {
      return this;
    }
    return this.left.min();
  }

  max() {
    if (this.right == undefined) {
      return this;
    }
    return this.right.max();
  }
}

class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode
  }

  add(data) {
    if (this.rootNode) {
      return this.rootNode.add(data);
    }
    this.rootNode = new TreeNode(data);
  }

  has(data) {
    if (this.rootNode !== undefined && this.rootNode.has(data)) {
      return true;
    } else {
      return false;
    }
  }

  find(data) {
    if (this.rootNode) {
      let result = this.rootNode.find(data);
      if (result) {
        return result;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  remove(data) {
    if (this.rootNode) {
      this.rootNode = this.rootNode.remove(data);
    }
  }

  min() {
    if (this.rootNode) {
      let minNode = this.rootNode.min();
      if (minNode) {
        return minNode.data;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  max() {
    if (this.rootNode) {
      let maxNode = this.rootNode.max();
      if (maxNode) {
        return maxNode.data;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}

module.exports = {
  BinarySearchTree
};