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

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};