/*
 * Write your JS code in this file.  Don't forget to include your name and
 * @oregonstate.edu email address below.
 *
 * Name:    Ryan Stachura
 * Email:   stachurr@oregonstate.edu
 */

/* modal backdrop id = modal-backdrop */
/* modal id = sell-something-modal */

/*==================== Event Listeners ====================*/
document.getElementById("sell-something-button").addEventListener("click", toggle_modal);
document.getElementById("modal-close").addEventListener("click", toggle_modal);
document.getElementById("modal-cancel").addEventListener("click", toggle_modal);

/*====================    Functions    ====================*/
/* Part 2 - modal */
function toggle_modal() {
    /*UNFINISHED: clear any user information before displaying*/
    document.getElementById("post-text-input").innerHTML = "";

    document.getElementById("modal-backdrop").classList.toggle('hidden');
    document.getElementById("sell-something-modal").classList.toggle('hidden');
}
