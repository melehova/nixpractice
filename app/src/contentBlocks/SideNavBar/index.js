import React from "react";
import './index.css'
import Checkbox from "../Checkbox";

export default class SideNavBar extends React.Component {
    constructor({ features, props }) {
        super()
        this.state = {
            props: [...props],
            disabled: '',
            features: features,
            path: [
                {
                    id: 0,
                    href: '/',
                    anchor: 'Головна',
                },
                {
                    id: 1,
                    href: '/',
                    anchor: 'Каталог',
                },
                {
                    id: 2,
                    href: '/',
                    anchor: 'Макраме',
                },
            ]
        }
        this.state.props.forEach(group => {
            group.options.forEach(option => {
                option['isChecked'] = false
            })
        })
    }

    foundedWord() {
        let digit = this.props.found % 10
        if (digit === 1) 
            return 'товар'
        else if (digit > 1 && digit < 5)
            return 'товари'
        else
            return 'товарів'
    }

    render() {
        return (
            <div className="ad__nav-side-bar col-2">
                <div className="ad__nav-breadcrumbs">
                    {this.state.path.map(route => {
                        return (<div key={route.id}><a href={route.href}>{route.anchor}</a></div>)
                    })}
                </div>
                {this.state.props.map(group => {
                    return (
                        <div className="ad__filter-group" key={group.id}>
                            <div className="ad__filter-title">{group.title}</div>
                            {group.options.map(option => {
                                return (<Checkbox props={option} setFilterState={this.props.setFilterState} groupId={group.id} features={this.props.features} key={option.id} disabled={this.state.disabled} />)
                            })}
                        </div>)
                })}
                <button className="ad__filter-btn show" disabled={this.state.disabled} onClick={this.props.filterAds}>Показати</button>
                <button className="ad__filter-btn clear" disabled={this.state.disabled} onClick={this.props.resetFilters}>Очистити</button>
                <span className="ad__filter-found">Знайдено {this.props.found} {this.foundedWord()}</span>
            </div>
        )
    }
}