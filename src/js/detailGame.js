import { waitForElement } from './waitForElement.js';

export async function moveAchievments(params) {
    try {
        var sidebar = await waitForElement('._2aor4XVOYzN1PBSREk0UbO');
        sidebar.prepend(sidebar.children[2]);

        //Move Header position
        // var header = await waitForElement('._1U7LKpx70kEsz3jJwAFOi-');
        // var content = await waitForElement('._1_cYNJSvS6IXs9vLTEYjy5');
        // var container = await waitForElement('._1SvpjsckP9cPRxO6gCBHrw');
        // container.insertBefore(header, content)

        // Inject gradient effect on game image
        var container = await waitForElement('._2gZXhRmKUk68pA28-5ZmGQ');
        var gradient = document.createElement('div');
        gradient.className = 'image-gradient'

        container.appendChild(gradient);
    } catch (e) {
        console.log( e)
    }
}