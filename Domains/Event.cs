using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resala_App.Domains
{
    public class Event
    {
        string script { get; set; }
        bool sharable { get; set; }
        bool hasCalls { get; set; }
        int id { get; set; }
        string name { get; set; }
        DateTime fromDate { get; set; }
        string description { get; set; }
        DateTime toDate { get; set; }
        DateTime callsStartTime { get; set; }

    }
}
