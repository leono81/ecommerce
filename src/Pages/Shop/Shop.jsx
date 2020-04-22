import React, { Component } from "react"
import ShopData from "./ShopData"
import CollectionPreview from "../../component/CollectionPreview/CollectionPreview"

class ShopPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: ShopData,
    }
  }

  render() {
    const { collections } = this.state
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    )
  }
}

export default ShopPage
