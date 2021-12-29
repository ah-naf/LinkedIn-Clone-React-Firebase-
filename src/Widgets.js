import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import Fiber from '@material-ui/icons/FiberManualRecord'

export default function Widgets() {

    const newsArticle = (heading, subtitle) => {
        return <div className="widgets__article">
            <div className="widgets__articleLeft">
                <Fiber />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    }

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle('Ahnaf React', 'Top news - 9999 readers')}
            {newsArticle('Ahnaf React', 'Top news - 9999 readers')}
            {newsArticle('Ahnaf React', 'Top news - 9999 readers')}
            {newsArticle('Ahnaf React', 'Top news - 9999 readers')}
        </div>
    )
}
