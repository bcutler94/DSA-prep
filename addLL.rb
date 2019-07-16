def add_two_numbers(l1, l2, remainder = 0)
    if l2 == nil && l1 == nil
        return remainder == 1 ? ListNode.new(remainder) : nil
    end
    l1_val = l1 ? l1.val : 0
    l2_val = l2 ? l2.val : 0
    sum = l1_val + l2_val + remainder
    remainder = 0
    if sum >= 10 
        remainder = 1
        sum %= 10
    end
    node = ListNode.new(sum)
    node.next = add_two_numbers(l1 ? l1.next : nil, l2 ? l2.next : nil, remainder)
    node
end