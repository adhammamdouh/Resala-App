using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resala.App.CRM.Domains
{
    public class EventResult
    {
        int id { get; set; }
        double responsePercentage { get; set; }
        double attendancePercentage { get; set; }
        double attractingPercentage { get; set; }
        int presentCount { get; set; }
        int callsCount { get; set; }
        double ensurePercentage { get; set; }
        int eventId { get; set; }
        int branchId { get; set; }
    }
}
