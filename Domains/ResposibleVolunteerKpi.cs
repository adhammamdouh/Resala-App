using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resala_App.Domains
{
    public class ResposibleVolunteerKpi
    {
        int id { get; set; }
        int presentCount { get; set; }
        int ensureCount { get; set; }
        int callCount { get; set; }
        int resposibleVolunteerId { get; set; }

    }
}
