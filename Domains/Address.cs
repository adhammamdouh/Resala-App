using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resala.App.CRM.Domains
{
    public class Address
    {
        int apartmentNumber { get; set; }
        int id { get; set; }
        int BuildingNumber { get; set; }
        string streetName { get; set; }
        int capitalId { get; set; }
        string additionalInfo { get; set; }
        string regionName { get; set; }
        Capital capital { get; set; }
        
    }
}
