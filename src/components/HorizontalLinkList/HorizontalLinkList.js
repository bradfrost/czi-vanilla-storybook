import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import HorizontalLinkListItem from '../HorizontalLinkListItem';
import './HorizontalLinkList.scss';

function HorizontalLinkList(props) {
  const { className, size, items, variant, children, theme, ...other } = props;

  const componentClassName = classnames(
    'cn-c-horizontal-link-list',
    className,
    {
      'cn-c-horizontal-link-list--small': size == 'small',
      'cn-c-horizontal-link-list--inverted': theme == 'inverted'
    }
  );

  return (
    <ul className={componentClassName} {...other}>
      {children
        ? children
        : items.map((item, index) => {
            return (
              <HorizontalLinkListItem
                className="cn-c-horizontal-link-list__item"
                key={`cn-c-horizontal-link-list__item-${index}`}
                href={item.href}
                iconName={item.iconName}
                text={item.text}
                meta={item.meta}
                screenReaderText={item.screenReaderText}
                target={item.target}
              />
            );
          })}
    </ul>
  );
}

HorizontalLinkList.propTypes = {
  /**
   * Child node(s) that can be nested inside component
   */
  children: PropTypes.node,
  /**
   * CSS class names that can be appended to the component.
   */
  className: PropTypes.string,
  /**
   * The array of items to be passed into the component. The array must take on the specified shape
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      iconName: PropTypes.string,
      text: PropTypes.string,
      meta: PropTypes.string,
      screenReaderText: PropTypes.string,
      target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top'])
    })
  ),
  /**
   * Size variations of the HorizontalLinkList:
   * - **small** yields a HorizontalLinkList with smaller typography
   */
  size: PropTypes.oneOf(['small']),
  /**
   * Target attribute for a link (i.e. set to _blank to open in new tab)
   * - **_blank** yields a link that opens in a new tab
   * - **_self** yields a link that loads the URL into the same browsing context as the current one. This is the default behavior
   * - **_parent** yields a link that loads the URL into the parent browsing context of the current one. If there is no parent, this behaves the same way as _self
   * - **_top** yields a link that loads the URL into the top-level browsing context. If there is no parent, this behaves the same way as _self.
   */
  target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top'])
};

export default HorizontalLinkList;
