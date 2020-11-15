import React from 'react';
import './ToolbarButton.css';

export default function ToolbarButton(props) {
    const { icon, size } = props;
    return (
      <i id={size} className={`toolbar-button ${icon}`} />
    );
}