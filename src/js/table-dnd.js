// ===================================================================
// Author: Denis Howlett <feedback@isocra.com>
// WWW: http://www.isocra.com/
//
// NOTICE: You may use this code for any purpose, commercial or
// private, without any further permission from the author. You may
// remove this notice from your final code if you wish, however we
// would appreciate it if at least the web site address is kept.
//
// You may *NOT* re-distribute this code in any way except through its
// use. That means, you can include it in your product, or your web
// site, or any other form where the code is actually being used. You
// may not put the plain javascript up on your site for download or
// include it in your javascript libraries for download.
// If you wish to share this code with others, please just point them
// to the URL instead.
//
// Please DO NOT link directly to this .js files from your site. Copy
// the files to your server and use them there. Thank you.
// ===================================================================


/**
 * Encapsulate table Drag and Drop in a class. We'll have this as a Singleton
 * so we don't get scoping problems.
 */
var ib_TableDnD = function(ib_resetRowNumbers) {

  /**
   * Keep hold of the current table being dragged
   */
  var currentTable = null;
  /**
   * Keep hold of the current drag object if any
   */
  this.dragObject = null;
  /**
   * The current mouse offset
   */
  this.mouseOffset = null;
  /**
   * Remember the old value of Y so that we don't do too much processing
   */
  this.oldY = 0;

  /**
   * Initialise the drag and drop by capturing mouse move events
   */
  this.init = function () {
    var rows = $('[data-iterate="item"]');
    for (var i = 0; i < rows.length; i++)
      this.makeDraggable(rows[i]);
    
    /**
     * Capture the onmousemove so that we can see if a row from the current
     * table if any is being dragged.
     * @param ev the event (for Firefox and Safari, otherwise we use window.event for IE)
     */
    document.onmousemove = function (ev) {
      if (currentTable && currentTable.dragObject) {
        ev = ev || window.event;
        var mousePos = currentTable.mouseCoords(ev);
        var y = mousePos.y;
        if (y != currentTable.oldY) {
          // work out if we're going up or down...
          var movingDown = y > currentTable.oldY;
          // update the old value
          currentTable.oldY = y;
          // update the style to show we're dragging
          $(currentTable.dragObject).addClass('ib_dragrow');
          document.body.style.cursor = "move";

          // If we're over a row then move the dragged row to there so that the user sees the
          // effect dynamically
          var currentRow = currentTable.findDropTargetRow(y);
          if (currentRow) {
            if (movingDown && currentTable.dragObject != currentRow) {
              currentTable.dragObject.parentNode.insertBefore(currentTable.dragObject, currentRow.nextSibling);
            } else if (!movingDown && currentTable.dragObject != currentRow) {
              currentTable.dragObject.parentNode.insertBefore(currentTable.dragObject, currentRow);
            }
          }
        }

        return false;
      }
    };

    /**
     * Similarly for the mouseup
     */
    document.onmouseup = function (ev) {
      if (currentTable && currentTable.dragObject) {
        var droppedRow = currentTable.dragObject;
        // If we have a dragObject, then we need to release it,
        // The row will already have been moved to the right place so we just reset stuff
        $(currentTable.dragObject).removeClass('ib_dragrow');
        
        currentTable.dragObject = null;
        // And then call the onDrop method in case anyone wants to do any post processing
        currentTable.onDrop(droppedRow);
        currentTable = null; // let go of the table too
      }
    };
  };

  /**
   * This function is called when you drop a row, so redefine it in your code
   * to do whatever you want, for example use Ajax to update the server
   */
  this.onDrop = function (droppedRow) {
    document.body.style.cursor = "default";
    ib_resetRowNumbers();
  };

  /**
   * Get the scroll X and Y position
   */
  var getScrollXY = function () {
    var scrOfX = 0, scrOfY = 0;
    if (typeof (window.pageYOffset) == 'number') {
      //Netscape compliant
      scrOfY = window.pageYOffset;
      scrOfX = window.pageXOffset;
    } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
      //DOM compliant
      scrOfY = document.body.scrollTop;
      scrOfX = document.body.scrollLeft;
    } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
      //IE6 standards compliant mode
      scrOfY = document.documentElement.scrollTop;
      scrOfX = document.documentElement.scrollLeft;
    }
    return [scrOfX, scrOfY];
  };

  /**
   * Get the mouse coordinates from the event (allowing for browser differences)
   */
  this.mouseCoords = function (ev) {
    if (ev.pageX || ev.pageY) {
      return { x: ev.pageX, y: ev.pageY };
    }
    return {
      x: ev.clientX + getScrollXY()[0],
      y: ev.clientY + getScrollXY()[1]
    };
  };

  /**
   * Given a target element and a mouse event, get the mouse offset from that element.
   * To do this we need the element's position and the mouse position
   */
  this.getMouseOffset = function (target, ev) {
    e = ev || window.event;

    var docPos = $(target).offset();
    var mousePos = this.mouseCoords(e);
    return { x: mousePos.x - docPos.left, y: mousePos.y - docPos.top };
  };

  /**
   * Get the source element from an event in a way that works for IE and Firefox and Safari
   * @param evt the source event for Firefox (but not IE--IE uses window.event)
   */
  var getEventSource = function (evt) {
    if (window.event) {
      evt = window.event; // For IE
      return evt.srcElement;
    } else {
      return evt.target; // For Firefox
    }
  };

  /**
   * Take an item and add an onmousedown method so that we can make it draggable
   */
  this.makeDraggable = function (item) {
    if (!item) return;
    var self = this; // Keep the context of the TableDnd inside the function
    $(item).find('.ib_move').on('mousedown', function (ev) {
      // Need to check to see if we are an input or not, if we are an input, then return true to allow normal processing
      var target = getEventSource(ev);
      if (target.tagName == 'INPUT' || target.tagName == 'SELECT' || target.tagName == 'TEXTAREA') return true;
      currentTable = self;
      self.dragObject = item;
      self.mouseOffset = self.getMouseOffset(item, ev);
      return false;
    });
    $(item).find('.ib_move').css("cursor", "move");
  };

  /**
   * We're only worried about the y position really, because we can only move rows up and down
   */
  this.findDropTargetRow = function (y) {
    var rows = $('[data-iterate="item"]');
    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];
      var rowY = $(row).offset().top;
      var rowHeight = parseInt(row.offsetHeight);
      if (row.offsetHeight === 0) {
        rowY = $(row.firstChild).offset().top;
        rowHeight = parseInt(row.firstChild.offsetHeight);
      }
      // Because we always have to insert before, we need to offset the height a bit
      if ((y > rowY - rowHeight) && (y < (rowY + rowHeight))) {
        // that's the row we're over
        return row;
      }
    }
    return null;
  };

};
