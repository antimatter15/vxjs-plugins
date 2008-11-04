/* vX AJAX Post Form JS plugin by soren121 */
/*Requires Ajax Submit*/
_.ajaxform=function(f,r){_.E(_.G(f),"submit",function(e){e.preventDefault();_.ajaxsubmit(f,r)})}