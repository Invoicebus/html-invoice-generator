var ib_parseData = function(data) {
  var d, i, j, line, items = [], parsed_data = {};

  d = data.split('\n');

  function trim(val) {
    return val.trim();
  }

  for(i = 0; i < d.length; i++)
  {
    line = d[i].trim();

    if(line == '#') // this is comment, ignore it
      continue;

    if(line[0] == '[') // this is property, the value is the next line
    {
      var property = line.substring(1, line.length - 1);
      parsed_data[property] = d[i + 1].replace(/\r|\n/g, ''); // clean the new line characters
    }

    if(line == '[default_columns]') // this is special case for [default_columns] because the value should be array
    {
      parsed_data.default_columns = parsed_data.default_columns.split(',').map(trim);
    }

    if(line == '[items]') // this is special case for [items] because the value is multiline
    {
      j = i + 1;
      line = d[j].trim(); // trim will clean the new line characters at the end
      while(line !== '')
      {
        var item = line.split('@||@');
        items.push({
          item_description : item[0],
          item_quantity    : item[1],
          item_price       : item[2],
          item_discount    : item[3],
          item_tax         : item[4]
        });
        j++;
        line = d[j].trim();
      }

      parsed_data.items = items;
    }
  }

  return parsed_data;
};
