import React from "react";
import './index.css'

export default class Checkbox extends React.Component {
    constructor({ props }) {
        super()
    }
    render() {
        return (
            <div>
                <label className="ad__filter-option-label">
                    <input
                        type='checkbox'
                        className={`checkbox${this.props.props.isChecked ? ' checked' : ''}`}
                        disabled={this.props.props.disabled}
                        onChange={() => this.props.setFilterState(this.props.groupId, this.props.props.id)}>
                    </input>
                    <svg
                        className={`checkbox${this.props.props.isChecked ? ' checked' : ''}`}
                        width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.45" y="0.45" width="13.1" height="13.1" rx="2.55" stroke={this.props.props.isChecked ? "url(#paint0_linear_8368_2)" : 'none'} strokeWidth="0.9" />
                        <path d="M4.33301 7L6.33301 9L9.66634 5" stroke={this.props.props.isChecked ? "url(#paint0_linear_8368_2)" : 'none'} strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                            <linearGradient id="paint0_linear_8368_2" x1="-3.02703" y1="-8.75" x2="17.6391" y2="-4.17483" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#976464" />
                                <stop offset="1" stopColor="#CFA5A5" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_8368_2" x1="3.17985" y1="2.5" x2="10.7766" y2="4.74241" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#976464" />
                                <stop offset="1" stopColor="#CFA5A5" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <span>{this.props.features[this.props.groupId][this.props.props.id].name}</span>
                    <div className="missing-functionality">Наразі функція недоступна :(</div>
                </label>
            </div >
        )
    }
}