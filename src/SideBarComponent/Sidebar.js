import React from 'react';

function Sidebar() {
    return (
        <aside style={{ width: '200px', backgroundColor: '#ddd', padding: '10px'}}>
            <ul style={{ listStyle: 'none', padding: 0;}}>
                <li><a href="#">Uppgift 2</a></li>
                <li><a href="#">Uppgift 3</a></li>
            </ul>
        </aside>
    );
}

export default Sidebar;