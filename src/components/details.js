import React, { Component } from 'react';

class Details extends Component {

  renderChildren = () => {
    const { links, info } = this.props;
    let children = [];
    if (links) {
      children = links.map(link => {
        return <a key={link._id} onClick={link.onClick} className='details__link'>{link.title}</a>
      })
    } else if (info) {
      children = info.map(item => {
      return <div key={item._id} className='details__item'> {item.title}</div>
      })
    }
    return children;
  }
  render() {
    const{ className, title } = this.props
    return (
      <div className={`${className} details`}>
        <div className='details__title'>{title}</div>
        <div className='details__links'>
            {
              this.renderChildren()
            }
          </div>
      </div>
    )
  }
}

export default Details;



// import React, { Component } from 'react';

// class Details extends Component {

//   renderChildren = () => {
//     const { links, info } = this.props;
//     let children = [];
//     if (links) {
//       children = links.map(link => {
//         return <a key={link._id} onClick={link.onClick} className='details__link'>{link.title}</a>
//       })
//     } else if (info) {
//       children = info.map(info => {
//         return <a key={info._id} className='details__link'>{info.title}</a>
//       })
//     }
//   }

//   render() {
//     const { className, title } = this.props;
//     return (
//       <div calssName={'${className} details'}>
//         <div className='details__title'>{title}</div>
//         <div className='details__links'>
//           {
//             this.renderChildren()
//           }
//         </div>
//       </div>
//     )
//   }
// }

// export default Details;