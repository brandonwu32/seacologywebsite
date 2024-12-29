'use client'


import './searchitem.css';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';


export default function SearchItem(props) {
    const searchParams = useSearchParams();
    let sesh = searchParams.get("session");
    const maxLength = 60;

    function truncateString(text) {
        if (text.length >= maxLength) {
            return text.substr(0, maxLength) + '...'
        } else {
            return text
        }
    }
    return (
        <div className = 'item-container'>
            <Suspense>
                <Link href = {props.item.page + "?session=" + sesh + '#' + props.item.position}>
                    <div className = 'item-header-container'>
                        <div className = 'item-header'>
                            <p className = 'page-url'>Page: {props.item.page}</p>
                            <p className = 'position-number'>Line: {props.item.position}</p>
                        </div>

                    </div>
                    <div className = 'item-content'>
                        {truncateString(props.item.content)}
                    </div>
                </Link>
            </Suspense>
        </div>
    )
}