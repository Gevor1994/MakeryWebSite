import React, { Component, Fragment } from 'react';
import Media from 'react-responsive';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import left from '../../images/left.svg';
import right from '../../images/right.svg';
import { SliderWrap } from './Slider.style';

class Slider extends Component {
    state = {
        currentIndex: 0,
    };

    slideTo = (i) => this.setState({ currentIndex: i });

    onSlideChanged = (e) => this.setState({ currentIndex: e.item });

    slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 });

    slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 });

    thumbItem = (item, i) => <span onClick={() => this.slideTo(i)}>* </span>;

    galleryItems = () => {
        const { items } = this.props;
        return items.map((i) => <h2 key={i}> {i}</h2>);
    }

    handleOnDragStart = e => e.preventDefault();

    render() {
        const { responsive, children, dotsDisabled, items } = this.props;
        const { currentIndex, galleryItems } = this.state;
        const showDotsDesc = !dotsDisabled && items.length > responsive['1024'].items;
        const showDotsMobile = !dotsDisabled && items.length > responsive['600'].items;
        return (
            <Fragment>
                <SliderWrap showArrows itemsPerRow={responsive['1400'].items}>
                    <img src={left} onClick={() => this.slidePrev()} alt='left'/>
                    <Media maxWidth={600}>
                        <AliceCarousel
                            dotsDisabled={!showDotsMobile}
                            buttonsDisabled={true}
                            items={galleryItems}
                            responsive={responsive}
                            slideToIndex={currentIndex}
                            onSlideChanged={this.onSlideChanged}
                        >
                            {children}
                        </AliceCarousel>
                    </Media>
                    <Media minWidth={601}>
                        <AliceCarousel
                            dotsDisabled={!showDotsDesc}
                            buttonsDisabled={true}
                            items={galleryItems}
                            responsive={responsive}
                            slideToIndex={currentIndex}
                            onSlideChanged={this.onSlideChanged}
                        >
                            {children}
                        </AliceCarousel>
                    </Media>
                    <img src={right} onClick={() => this.slideNext()} alt='right'/>
                </SliderWrap>
            </Fragment>
        );
    }
}

export default Slider;