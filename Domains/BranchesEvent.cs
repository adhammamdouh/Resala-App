using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Resala_App.Domains
{
    public class BranchesEvent
    {
        int eventId { get; set; }
        int branchId { get; set; }
        bool hasEvent { get; set; }

    }
}
