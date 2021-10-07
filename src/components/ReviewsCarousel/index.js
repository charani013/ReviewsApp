// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    reviewNum: 0,
  }

  onClickLeft = () => {
    const {reviewNum} = this.state
    if (reviewNum > 0) {
      this.setState(prevState => ({
        reviewNum: prevState.reviewNum - 1,
      }))
    }
  }

  onClickRight = () => {
    const {reviewNum} = this.state
    const {reviewsList} = this.props
    if (reviewNum < reviewsList.length - 1) {
      this.setState(prevState => ({
        reviewNum: prevState.reviewNum + 1,
      }))
    }
  }

  reviewImage = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="review-list">
        <img src={imgUrl} alt={username} />
        <p className="user-class">{username}</p>
        <p className="company-class">{companyName}</p>
        <p className="description-class">{description}</p>
      </div>
    )
  }

  render() {
    const {reviewNum} = this.state
    const {reviewsList} = this.props
    const resultReview = reviewsList[reviewNum]

    return (
      <div className="bg-container">
        <h1 className="heading-class">Reviews</h1>
        <div className="container-row">
          <button
            testid="leftArrow"
            type="button"
            className="button-class"
            onClick={this.onClickLeft}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.reviewImage(resultReview)}
          <button
            testid="rightArrow"
            type="button"
            className="button-class"
            onClick={this.onClickRight}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
