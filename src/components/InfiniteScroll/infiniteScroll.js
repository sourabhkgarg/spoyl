import React from 'react';
import ReactDOM  from 'react-dom';

const topOfElement = function(element) {
  if (!element)
    return 0;

  return ( element.offsetTop + topOfElement(element.offsetParent) );
};

class InfiniteScroll extends React.Component {

  constructor(props) {
    super(props);
    this.listener = this.scrollListener.bind(this);
  }

  componentDidMount() {
    this.attachScrollListener();
  }

  componentWillUnmount() {
    this.detachScrollListener();
  }

  scrollListener () {
    const { offset, scrollhandler } = this.props;
    const el = ReactDOM.findDOMNode(this);
    const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if( topOfElement(el) + el.offsetHeight - scrollTop - window.innerHeight < offset )
      scrollhandler();
  }

  attachScrollListener() {
    window.addEventListener('scroll', this.listener);
    window.addEventListener('resize', this.listener);

    this.listener();
  }

  detachScrollListener() {
    window.removeEventListener('scroll', this.listener);
    window.removeEventListener('resize', this.listener);
  }

  render() {
    const { style, children } = this.props;

    return (
      <div className={style}>
        {children}
      </div>
    );
  }
}



export default InfiniteScroll;
